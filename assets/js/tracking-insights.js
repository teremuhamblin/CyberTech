export default {
  computeHeatmap(events) {
    return events.reduce((acc, e) => {
      acc[e.type] = (acc[e.type] || 0) + 1;
      return acc;
    }, {});
  }
};
`
