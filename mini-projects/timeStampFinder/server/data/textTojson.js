import fs from 'fs';

const data = fs.readFileSync("videoText.txt","utf-8");
const result = [];
data.split(/\r?\n/)
.forEach(line =>{
    const match = line.match(/^\[(.*?)\]\s*(.*)$/);
    if(!match) return;
    result.push({
        time:match[1],
        text:match[2]
    })
})


fs.writeFileSync("videoTranscript.js",JSON.stringify(result,null,2));