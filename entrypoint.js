import {exec,spawn} from "child_process";
console.log("dummy entrypoint process")

const run = spawn("npm",["run", "dev"]);

run.stdout.on("data", data =>{
    console.log(data.toString());
})

run.stderr.on("data", data => {
    console.log(data.toString());
});

run.on("close", code => {
    console.log("run close");
    if(code === 0){
        console.log("run close code 0");
    }else{
        console.log("run close code not 0");
    }
})