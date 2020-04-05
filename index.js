const inquirer=require("inquirer")
inquirer.prompt([
  {
    type:"inpute",
    name:"test",
    message:"test question"

}



]).then(answer=>{
  console.log(answers)
})