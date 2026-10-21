import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const app=fs.readFileSync(new URL('../src/app.js',import.meta.url),'utf8');
const helpers=app.slice(app.indexOf('const readerMemory'),app.indexOf('function readerLinks'));
for(const blocked of [false,true]){
 const values=new Map();
 const context=vm.createContext({localStorage:{getItem(k){if(blocked)throw Error('blocked');return values.get(k)??null},setItem(k,v){if(blocked)throw Error('blocked');values.set(k,v)}}});
 vm.runInContext(helpers,context);
 vm.runInContext('readerWrite("saved",["example"]);',context);
 assert.equal(vm.runInContext('readerRead("saved",[])[0]',context),'example');
 assert.equal(vm.runInContext('readerStorageAvailable',context),!blocked);
}
const corrupt=vm.createContext({localStorage:{getItem(){return '{bad'},setItem(){}}});
vm.runInContext(helpers,corrupt);
assert.equal(vm.runInContext('savedIds.length',corrupt),0);
const data=JSON.parse(fs.readFileSync(new URL('../src/content.json',import.meta.url),'utf8'));
const ids=new Set(data.blocks.map(b=>b.id));
const questions=app.slice(app.indexOf('const dailyQuestions='),app.indexOf('function questionsPage'));
const qcontext=vm.createContext({});vm.runInContext(questions,qcontext);
for(const q of vm.runInContext('dailyQuestions',qcontext))for(const id of q.ids)assert.ok(ids.has(id),id);
console.log('PASS: storage persistence, blocked/corrupt storage fallback, question references');
