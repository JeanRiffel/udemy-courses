const { promisify } = require('util');
let python_shell_run = promisify(require('python-shell').run);
//import {PythonShell} from 'python-shell'

export function sentilize(sentence){
    return new Promise (
        (resolve, reject) => {
            
            let options = {            
                scriptPath: '/home/jean/course_nodejs_reactjs/sentilizer_api/src',
                args: ['-s', '\"' + sentence + '\"']
            }

            
            /*PythonShell.run('vader.py', options, function(err, results){
                console.log('test %j' ,  results)
            } )*/
            
             python_shell_run('vader.py', options)
            .then(results => {
                let sentiment = results[0]
                let resp = { sentiment:'Neutral'}
                if (sentiment === 'neg'){
                    resp.sentiment = 'negative'
                }
                else if (sentiment === 'pos'){
                    resp.sentiment = 'positive'
                }
                resolve(resp)
            })
            .catch(error =>{
                reject(error)
            })
        }
    )
}