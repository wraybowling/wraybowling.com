<template>
  <div>
    <svg
      width="300"
      viewBox="0 0 300 300"
      class="three-way-slider"
      v-on="{
        mousedown: down,
        touchstart: down,
        mousemove: move,
        touchmove: move,
        mouseup: up,
        touchend: up,
      }"
    >
      <polygon points="150 50, 250 220, 50 220" />
      <circle :cx="x" :cy="y" r="15" v-if="activated" />
    </svg>
    <p>
      Option 1:
      <input
        type="range"
        v-model="option1"
        min="0"
        max="1"
        step="0.01"
        disabled
      />
    </p>
    <p>
      Option 2:
      <input
        type="range"
        v-model="option2"
        min="0"
        max="1"
        step="0.01"
        disabled
      />
    </p>
    <p>
      Option 3:
      <input
        type="range"
        v-model="option3"
        min="0"
        max="1"
        step="0.01"
        disabled
      />
    </p>
    <input type="number" v-model="x" />
    <input type="number" v-model="y" />
  </div>
</template>

<script>
const Vec2 = require("vec2");
const tri1 = Vec2(150, 50);
const tri2 = Vec2(250, 220);
const tri3 = Vec2(50, 220);

// let prevPoint = Vec2();
let thisPoint = Vec2(150, 165);
let pressed = false;

export default {
  name: "three-way-slider-arbitrary",
  data: function () {
    return {
      x: 150,
      y: 165,
      option1: 0.333333,
      option2: 0.333333,
      option3: 0.333333,
      activated: true,
    };
  },
  methods: {
    down: function (e) {
      e.preventDefault();
      pressed = true;
      this.activated = true;
      this.move(e);
    },
    move: function (e) {
      if (pressed) {
        thisPoint = Vec2(
          e.pageX - this._vnode.elm.offsetLeft,
          e.pageY - this._vnode.elm.offsetTop
        );
        thisPoint = this.pointIntoTriangle(thisPoint);
        this.x = thisPoint.x;
        this.y = thisPoint.y;
      }
      this.option1 = (170 - thisPoint.distance(tri1)) / 170;
      this.option2 = (170 - thisPoint.distance(tri2)) / 170;
      this.option3 = (170 - thisPoint.distance(tri3)) / 170;
    },
    up: function (e) {
      pressed = false;
    },

    //return a scalar, implying the vec2 Z values are 0
    cross: function (a, b) {
      return a.x * b.y - a.y * b.x;
    },

    //returns closest point on a line segment a-b to point p
    closestPointOnSegment: function (p, a, b) {
      let ap = p.subtract(a.x, a.y, true);
      let ab = b.subtract(a.x, a.y, true);

      let ab2 = ab.x * ab.x + ab.y * ab.y;
      let ap_ab = ap.x * ab.x + ap.y * ab.y;
      let t = ap_ab / ab2;

      //clamp to line segment
      t = Math.min(1, Math.max(t, 0));

      let closest = a.add(ab.multiply(t, true), true);
      return closest;
    },

    //returns if point 1 and point 2 are on the same side of segment a-b
    sameSide: function (p1, p2, a, b) {
      let cp1 = this.cross(
        b.subtract(a.x, a.y, true),
        p1.subtract(a.x, a.y, true)
      );
      let cp2 = this.cross(
        b.subtract(a.x, a.y, true),
        p2.subtract(a.x, a.y, true)
      );
      return Math.sign(cp1) == Math.sign(cp2); //"dot product" via comparison of cp scalars
    },

    //returns true if point p is inside triangle a-b-c
    pointInsideTriangle: function (p, a, b, c) {
      return (
        this.sameSide(p, a, b, c) &&
        this.sameSide(p, b, a, c) &&
        this.sameSide(p, c, a, b)
      );
    },

    //returns a point either inside or on the triangle
    pointIntoTriangle: function (p) {
      //var a = p;

      if (this.pointInsideTriangle(p, tri1, tri2, tri3)) {
        return p;
      } else {
        let ab = this.closestPointOnSegment(p, tri1, tri2);
        let ac = this.closestPointOnSegment(p, tri1, tri3);
        let bc = this.closestPointOnSegment(p, tri2, tri3);
        return p.nearest([ab, ac, bc]);
      }
    },
  },
};
</script>

<style lang="css">
.three-way-slider {
  background-color: grey;
  --triangle: rgb(120, 12, 45);
}

.three-way-slider polygon {
  fill: var(--triangle);
  stroke: var(--triangle);
  stroke-width: 40px;
  stroke-linejoin: round;
}

.three-way-slider circle {
  fill: white;
}
</style>
