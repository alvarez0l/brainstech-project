const MONGODB_URI = 'mongodb+srv://admin:oGjp24HfB8Do0Pry@cluster109.ciqquwb.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster109';

mongoose
    .connect(MONGODB_URI)  //Подключение к БД
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err));