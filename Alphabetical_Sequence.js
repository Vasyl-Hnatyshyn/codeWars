function alphaSeq (str) {
  const alhabet ="abcdefghijklmnopqrstuvwxyz";
  return str.split("").sort().map((v) => v.toUpperCase() + v.toLowerCase().repeat(alhabet.indexOf(v.toLowerCase()))).sort().join()
}
