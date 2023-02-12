function animate(obj, target, callback) {
    // clean any other timer
    clearInterval(obj.timer)
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target){
            clearInterval(obj.timer);
            callback && callback();
        } else {
            obj.style.left = obj.offsetLeft + step + 'px'
        }
    }, 15)
}

var left = document.getElementsByClassName('btn-lt')
var right = document.getElementsByClassName('btn-rt')
var chartUl = document.getElementsByClassName('chart-item-list')

left.addEventListener('click', animate(chartUl, 400))