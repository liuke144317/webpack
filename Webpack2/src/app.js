import './css/common.css'
import Layer from './components/layer/layer'
const App = function () {
    var dom = document.getElementById('app');
    dom.innerHTML=new Layer().tpl
}
new App();
