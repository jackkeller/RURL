const endpointUri = 'https://www.thecocktaildb.com/api/json/v1/1/';
export const api = {
  list: `${endpointUri}list.php?c=list`,
  filter: `${endpointUri}filter.php?c=`
}

export const logHeader = [
  'color: #b4d455',
  'font-size: 20px',
  'margin-bottom: 8px'
].join(';')

export const logStandard = [
  'background: #000',
  'border: 1px solid #aaa',
  'border-radius: 4px',
  'color: #aaa',
  'font-family: monospace',
  'font-size: 16px',
  'padding: 8px 16px'
].join(';')