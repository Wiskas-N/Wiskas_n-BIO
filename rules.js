document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showWarning("Правый клик заблокирован на этой странице");
        return false;
    });
    
    document.addEventListener('selectstart', function(e) {
    });
    
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
            e.preventDefault();
            return false;
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12') {
            e.preventDefault();
            showWarning("Инструменты разработчика заблокированы");
            return false;
        }
        
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            showWarning("Инструменты разработчика заблокированы");
            return false;
        }
        
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            showWarning("Консоль разработчика заблокирована");
            return false;
        }
        
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            showWarning("Инспектор элементов заблокирован");
            return false;
        }
        
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            showWarning("Просмотр исходного кода заблокирован");
            return false;
        }
        
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            showWarning("Сохранение страницы заблокировано");
            return false;
        }
        
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            showWarning("Печать страницы заблокирована");
            return false;
        }
    });
    
    document.addEventListener('copy', function(e) {
        
    });
    
    window.addEventListener('keyup', function(e) {
        if (e.key === 'PrintScreen') {
            navigator.clipboard.writeText('')
                .then(() => {
                    showWarning("Скриншот заблокирован");
                })
                .catch(err => {
                    console.log('Не удалось очистить буфер обмена');
                });
        }
    });
    
    let devToolsOpen = false;
    
    const threshold = 160;
    const checkDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        const orientation = widthThreshold || heightThreshold;
        
        if (orientation && !devToolsOpen) {
            devToolsOpen = true;
            document.body.classList.add('devtools-open');
        } else if (!orientation && devToolsOpen) {
            devToolsOpen = false;
            document.body.classList.remove('devtools-open');
        }
    };
    
    setInterval(checkDevTools, 500);
});
