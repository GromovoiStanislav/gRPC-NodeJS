const { loadPackageDefinition, credentials } = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Загрузка protobuf
const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'message.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    //includeDirs: [__dirname],
  }
);

// Загрузка gRPC пакета определения
const { pusher_service_package } = loadPackageDefinition(packageDefinition);

// Создание клиента gRPC
const client = new pusher_service_package.PusherService(
  'localhost:50051',
  credentials.createInsecure()
);

console.log('[x] To exit type "exit" ');
console.log('Type a message...');

process.stdin.on('data', (chunk) => {
  const str = chunk.toString().trim();
  if (str === 'exit') {
    process.exit(0);
  }

  // Вызов метода сервера
  client.SendMessage({ message: str }, (err, response) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
  });
});
