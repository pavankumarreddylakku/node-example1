//console.log(process.argv);//[ 'C:\\Program Files\\nodejs\\node.exe',
                          //'E:\\sai\\npm-learn\\session2\\process_object.js' ]
//var flag = process.argv.indexOf('--user');     
//console.log(flag);
/* E: \sai\npm - learn\session2 > node process_object.js--user pavan kumar
['C:\\Program Files\\nodejs\\node.exe',
'E:\\sai\\npm-learn\\session2\\process_object.js',
'--user',
'pavan',
    'kumar']
2  */   
process.stdout.write('Ask me a uation to me'); 
process.stdin.on('data',(answer) => {
    console.log(answer.toString());
    process.exit();
});     