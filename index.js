const colors = require('./colors');

class Script {
  _hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

  name(hex) {
    const rgb = this._hexToRgb(hex);

    let distance = 0;
    let minDistance = Infinity;
    let c;
    colors.forEach(color => {
      distance = Math.sqrt(
        color.rgb.r -
          rgb.r ** 2 +
          color.rgb.g -
          rgb.g ** 2 +
          color.rgb.b -
          rgb.b ** 2
      );

      if (distance < minDistance) {
        minDistance = distance;
        c = color;
      }
    });
    return c.name;
  }
}

module.exports = Script;
