export function dom() {
  // I can use DOM types
  document.createElement("div");

  // I CANNOT use Node types, which is a good thing
  // @ts-expect-error - Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node` and then add 'node' to the types field in your tsconfig.
  Math.random() > 0.5 && process.exit(0);

  return "dom";
}
