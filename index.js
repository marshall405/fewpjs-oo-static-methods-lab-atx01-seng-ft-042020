class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z-'\s]+/g, '')
  }

  static titleize(str) {
    const wordsNotToCap = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const words = str.split(" ").map((word, i) => {
      if (wordsNotToCap.indexOf(word) < 0 || i == 0) {
        return this.capitalize(word)
      } else {
        return word
      }
    })
    return words.join(" ")
  }
}
