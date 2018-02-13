import template from './layout.html'
import $ from 'jquery'

export default class Layout {

    render() {
         $('body').html(template);
    }
}   