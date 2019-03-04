import { Component } from '@angular/core';

@Component ({
    selector: 'hello-world2',
    template: `
                <div class="hello-world2">
                    <h1>Hola Mundo</h1>
                    <h2>Subtitulo</h2>
                </div>
            `,
    styles:    ['.hello-world2 {background: #000; color: #fff;}']
})
export class HelloWorld2 {

}
