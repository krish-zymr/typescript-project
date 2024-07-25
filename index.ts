import cluster from "cluster";
import os from 'os';
import { startServer } from "./server";

const numCPUs = os.cpus().length;

console.log(numCPUs, cluster.isPrimary);


if(cluster.isPrimary){
    console.log(`Primary ${process.pid} is running`);

for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
}

cluster.on('exit' , (worker , code , signal)=>{
    console.log(`Worker ${worker.process.pid} died` );
    cluster.fork();
});
}
else{
    startServer();
    console.log(`Worker ${process.pid} started`);
}