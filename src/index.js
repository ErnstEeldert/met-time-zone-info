import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import MyApp from 'my/app';

document.addEventListener('fsl-ready', (event) => {
    if (event.detail) {
        //show error
        console.error(e.detail);
    } else {
        const app = createElement('my-app', {
            is: MyApp
        });
        // eslint-disable-next-line @lwc/lwc/no-document-query
        document.querySelector('#main').appendChild(app);
    }
});
