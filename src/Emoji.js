const emoji_codes = {
  standard: [0xD83D, 0xDC4F],
  light: [0xD83D, 0xDC4F, 0xD83C, 0xDFFB],
  medium_light: [0xD83D, 0xDC4F, 0xD83C, 0xDFFC],
  medium: [0xD83D, 0xDC4F, 0xD83C, 0xDFFD],
  medium_dark: [0xD83D, 0xDC4F, 0xD83C, 0xDFFE],
  dark: [0xD83D, 0xDC4F, 0xD83C, 0xDFFF]
}

class Emoji {
  constructor(points) {
    this.points = points;
  }

  unicode() {
    return this.points.map(point => { return String.fromCodePoint(point) }).join('');
  }

  static for_color(color) {
    return new Emoji(emoji_codes[color]).unicode();
  }

  static random() {
    var keys = Object.keys(emoji_codes);
    var random_key = keys[Math.floor(Math.random()*keys.length)];
    return new Emoji(emoji_codes[random_key]).unicode();
  }

  static list() {
    var keys = Object.keys(emoji_codes);
    var items = keys.map((color) => this.for_color(color));
    return items;
  }
}

export default Emoji;
