import shippingText from './shippingText'; // Adjust the path accordingly

describe('shippingText function', () => {
  test('returns correct shipping text when there is a selected shipping option', () => {
    const shippingCT = [
      { is_s_true: false, shipping_option: 'Option A' },
      { is_s_true: true, shipping_option: 'Option B' },
      { is_s_true: false, shipping_option: 'Option C' },
    ];

    const result = shippingText(shippingCT);

    expect(result).toBe('Option B');
  });

  test('returns "Free" when there is no selected shipping option', () => {
    const shippingCT = [
      { is_s_true: false, shipping_option: 'Option A' },
      { is_s_true: false, shipping_option: 'Option B' },
      { is_s_true: false, shipping_option: 'Option C' },
    ];

    const result = shippingText(shippingCT);

    expect(result).toBe('Free');
  });

  test('returns null when shippingCT is undefined', () => {
    const result = shippingText(undefined);

    expect(result).toBe(null);
  });
});
