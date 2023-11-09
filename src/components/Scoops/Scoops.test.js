import {
    findAllByRole,
    getByRole,
    render,
    screen,
  } from '@testing-library/react';
  import Scoops from '.';
  import userEvent from '@testing-library/user-event';
  
  test("API'den gelen her bir çeşit için ekrana bir kart basılır", async () => {
    render(<Scoops />);
  
    const images = await screen.findAllByRole('img', { name: 'çeşit' });

    expect(images).toHaveLength(4);
  });
  
  test('Çeşit ekleme işleminin toplam fiyata yansıması', async () => {
    render(<Scoops />);
  
    const user = userEvent.setup();

    const total = screen.getByRole('heading', {
      name: /Çeşitler Ücreti:/i,
    });
  
    const buttons = await screen.findAllByRole('button', {
      name: 'Ekle',
    });
  
    await user.click(buttons[0]);
    expect(total).toHaveTextContent('20');
  
    await user.dblClick(buttons[1]);
    expect(total).toHaveTextContent('60');
  });
  
  test('Çeşit sıfırlamanın işleminin toplama yansıması', async () => {
    render(<Scoops />);
    const user = userEvent.setup();
  
    const total = screen.getByRole('heading', {
      name: /Çeşitler Ücreti:/i,
    });
  
    const delButtons = await screen.findAllByRole('button', {
      name: 'Sıfırla',
    });
  
    const addButtons = await screen.findAllByRole('button', {
      name: 'Ekle',
    });
  
    await user.click(addButtons[2]);
    await user.dblClick(addButtons[3]);
    expect(total).toHaveTextContent(60);
  
    await user.click(delButtons[2]);
    expect(total).toHaveTextContent(40);
  
    await user.click(delButtons[3]);
    expect(total).toHaveTextContent(0);
  });