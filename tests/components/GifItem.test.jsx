import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https//one-punchman.com/saitama.jpg';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    })
    test('debe de mostrar la imagen con la URL y el ALT indicado', () => {
        render( <GifItem title={title} url={url}/>);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        const { alt } = screen.getByRole('img');
        // expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('debe mostrar el titulo del componente', () => {
        render( <GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})