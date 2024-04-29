// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve adicionar comentários corretamente', () => {
        render(<PostComment/>);


        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Primeiro comentário' } });


        fireEvent.click(screen.getByText('Comentar'));

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Segundo comentário' } });
        fireEvent.click(screen.getByText('Comentar'));
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
