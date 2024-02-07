var fanButton = document.getElementById('fanButton');
        var fanContainer = document.querySelector('.ceiling-container');
        fanButton.addEventListener('click', function () {
            if (fanContainer.classList.contains('fan-on')) {
                fanContainer.classList.remove('fan-on');
                fanContainer.classList.add('fan-off');
            } else {
                fanContainer.classList.remove('fan-off');
                fanContainer.classList.add('fan-on');
            }
        });