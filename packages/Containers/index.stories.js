import { storiesOf } from '@storybook/vue'
import Table from './Table'
import TableRow from './TableRow'

storiesOf("Containers")

  .add("Table", () => ({
    components: { Table },
    template: `
      <Table
        :items="items"
      />
    `,
    data: () => ({
      items: [
        [ 'Yair Lamb', 'yair.lamb@email.com' ],
        [ 'Leonardo Payne', 'leonardo.payne@email.com' ],
        [ 'Carl Henson', 'carl.henson@email.com' ],
        [ 'Jensen Combs', 'jensen.combs@email.com' ],
        [ 'Amiah Burton', 'amiah.burton@email.com' ],
        [ 'Yaretzi Mayo', 'yaretzi.mayo@email.com' ],
        [ 'Kamren Huffman', 'kamren.huffman@email.com' ]
      ]
    }),
  }))

  .add("Table Row", () => ({
    components: { TableRow },
    template: `
      <TableRow
        :values="values"
      />
    `,
    data: () => ({
      values: ["José Silva", "email@email.com"],
    }),
  }));