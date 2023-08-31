//console.log(process.argv);

if (process.argv.indexOf("-m")!==0) {
  const flagIndex=process.argv.indexOf('-m');
flagIndex!==0&&console.log(process.argv[flagIndex+1]);

}
const productionMode = process.env.PRODUCTION === "true";
if (productionMode) {
  console.log('Application is running in production mode');
  // do production things
} else {
  console.log('Application is running in development mode');
  // do dev things
}
