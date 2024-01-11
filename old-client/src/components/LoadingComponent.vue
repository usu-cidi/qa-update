<!--Source: https://codesandbox.io/s/k519vww7rv?file=/src/App.vue-->

<template>
  <svg class="loading-spinner">
    <circle
        :cx="circlePositions[index] && circlePositions[index].x"
        :cy="circlePositions[index] && circlePositions[index].y"
        :r="item.radius"
        :fill="item.color"
        v-for="(item, index) in circles"
        :key="index"/>
  </svg>
</template>

<script>
/* eslint-disable */
const CENTER_X = 50;
const CENTER_Y = 50;
const RADIUS = 20;

function positionOnCircle(radius, angle, center) {
  return {
    x: center.x + (radius * Math.cos(toRadians(angle))),
    y: center.y + (radius * Math.sin(toRadians(angle)))
  };
}

function toRadians(angle) {
  return angle * Math.PI / 180;
}

function calculatePositions(component) {
  let angleIncrement = 360 / component.circles.length;
  let positions = {};
  component.circles.forEach((circle, index) => {
    positions[index] = positionOnCircle(
        RADIUS,
        angleIncrement * index,
        {x: CENTER_X, y: CENTER_Y}
    )
  });
  return positions;
}

export default {
  data() {
    return {
      circles: [
        {color: '#BAD7E9', radius: 0},
        {color: '#93BFCF', radius: 0},
        {color: '#5B8FB9', radius: 0},
        {color: '#3C84AB', radius: 0},
        {color: '#146C94', radius: 0},
        {color: '#3C84AB', radius: 0},
        {color: '#5B8FB9', radius: 0},
        {color: '#93BFCF', radius: 0},
        {color: '#CEE6F3', radius: 0},
      ],
      counter: 0,
      interval: null
    }
  },
  computed: {
    circlePositions: calculatePositions
  },
  created() {
    this.interval = setInterval(() => {
      this.counter++;
      this.circles = this.circles.map((item, index) => ({
        ...item,
        radius: (this.counter + index) % 8
      }));
    }, 100);
  },
  destroyed() {
    clearInterval(this.interval);
  }
}
</script>

<style scoped>
.loading-spinner {
  width: 100px;
  height: 100px;
}
</style>