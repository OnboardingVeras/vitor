const helloWorld = (msg : string = 'Hello World!') => {
  process.stdout.write(msg);
  return msg;
};

export default helloWorld;
