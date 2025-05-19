// 启动一个服务器，监听3000端口，打包为exe可执行文件，用户输入啥显示啥，输入exit退出
// 安装依赖
// npm install figlet express 
// 打包
// npx pkg .\app.js --targets node16-win-x64 --output app.exe
// 运行
// .\app.exe
// 输入exit退出
// 注意：需要安装node16版本，否则会报错
// 注意：需要安装pkg，否则会报错
// 注意：需要安装figlet，否则会报错
// 注意：需要安装express，否则会报错

const readline = require("readline");
const chalk = require("chalk");
const figlet = require("figlet");

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 持续监听用户输入
function promptUser() {
  rl.question("请输入（输入 exit 退出）：", (answer) => {
    // 彩色输出
        console.log(chalk.green(answer));
        figlet(answer, function (err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
            }
            console.log('你输入了：',chalk.blue(data));
            // console.log(data);
            });
    if (answer.trim().toLowerCase() === "exit") {
      console.log("再见！");
      rl.close();
      process.exit(0);
    } else {
      // 继续监听用户输入
      promptUser();
    }
  });
}

// // 开始监听用户输入
promptUser();
