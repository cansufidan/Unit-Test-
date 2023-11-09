import { render, screen } from '@testing-library/react';
import Toppings from '.';
import userEvent from '@testing-library/user-event';

test('sosları ekleme çıkarma işlemin toplam fiyata olan etkisi', async () => {
  render(<Toppings />);
  const user = userEvent.setup();

  const total = screen.getByRole('heading', {
    name: /Soslar Ücreti:/i,
  });

  const cherryCheck = await screen.findByRole('checkbox', {
    name: /Cherries/i,
  });
  await user.click(cherryCheck);

  expect(total).toHaveTextContent('3');

  const mochiCheck = await screen.findByRole('checkbox', {
    name: /mochi/i,
  });
  await user.click(mochiCheck);

  expect(total).toHaveTextContent('6');

  await user.click(cherryCheck);
  expect(total).toHaveTextContent('3');

  await user.click(mochiCheck);
  expect(total).toHaveTextContent('0');
});