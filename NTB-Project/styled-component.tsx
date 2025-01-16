import { ButtonsProps } from "./types";

const Buttons = (props: ButtonsProps) => {
  const renderButton = () => {
    const { variant, label } = props;

    const baseStyles = "border: none; display: inline-block; text-decoration: none; border-radius: 40px; margin: 0; text-align: center; padding: 15px 0; font-size: 14px; line-height: 20px; width: 100%; font-family: SuisseIntl, Helvetica, Arial, sans-serif; font-weight: 600;";
    
    const variants = {
      light: `
        ${baseStyles} color: #ffffff; background-color: #0E68FF;
      `,
      link: `
        ${baseStyles} color: #0032a0; background-color: transparent; text-align: right;
      `,
      main: `
        ${baseStyles} color: #ffffff; background-color: #0032A0;
      `,
      outline: `
        ${baseStyles} color: #0032A0; border: 1px solid #0032A0; background-color: transparent;
      `,
    };

    const content = {
      light: `
        <a href="https://mytrips.copaair.com" style="${variants.light}">
          ${label}
        </a>
      `,
      link: `
        <table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%; color: #ffffff;">
          <tr>
            <td align="right" style="width: 50%;">
              <a href="https://mytrips.copaair.com/" target="_blank" style="${variants.link}">
                ${label}
              </a>
            </td>
            <td style="width: 50%;">
              <a href="https://mytrips.copaair.com/" target="_blank" style="display: block; height: 24px">
                <img src="https://www.copaair.com/assets/icon-keyboard-arrow.png" alt="arrow"/>
              </a>
            </td>
          </tr>
        </table>
      `,
      main: `
        <a href="https://mytrips.copaair.com" style="${variants.main}">
          ${label}
        </a>
      `,
      outline: `
        <a href="https://mytrips.copaair.com" style="${variants.outline}">
          ${label}
        </a>
      `,
    };

    return content[variant] || "No variant selected";
  };

  return (
    <div dangerouslySetInnerHTML={{ __html: renderButton() }} />
  );
};

export default Buttons;



