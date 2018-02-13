import template from './layout.html'

export default class Layout {
    
    render(){
        var $ = require("jquery");
            $(document).ready(function(){
                $('body').html(template);
            })
    }
}   