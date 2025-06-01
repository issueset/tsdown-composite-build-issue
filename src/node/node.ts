export function node() {
  // I can use node types
  Math.random() > 0.5 && process.exit(0);

  // I CANNOT use DOM types, which is a good thing
  // @ts-expect-error Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.ts(2584)
  document.createElement("div");

  return "node";
}
