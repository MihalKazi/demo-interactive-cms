import { defineField, defineType } from 'sanity'

export const schemaTypes = [
  defineType({
    name: 'story',
    title: 'Interactive Article',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Headline',
        type: 'string',
      }),
      defineField({
        name: 'author',
        title: 'Author Name',
        type: 'string',
      }),
      defineField({
        name: 'content',
        title: 'Article Builder (Blocks)',
        type: 'array',
        of: [
          { type: 'block', title: 'Text Paragraph' },
          {
            name: 'chartBlock',
            title: 'Interactive Chart',
            type: 'object',
            fields: [
              { name: 'title', title: 'Chart Title', type: 'string' },
              { name: 'chartType', title: 'Chart Style', type: 'string', options: { list: ['Bar Chart'], layout: 'radio' }, initialValue: 'Bar Chart' },
              { name: 'csvData', title: 'Data (CSV)', type: 'text' }
            ]
          },
          // --- NEW: NETRA NEWS INCIDENT LIST ---
          {
            name: 'incidentList',
            title: 'Incident Database (Accordion)',
            type: 'object',
            fields: [
              {
                name: 'incidents',
                title: 'Recorded Incidents',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      { name: 'date', title: 'Date (YYYY-MM-DD)', type: 'string' },
                      { name: 'name', title: 'Victim Name', type: 'string' },
                      { name: 'age', title: 'Age', type: 'string' },
                      { name: 'accusation', title: 'Accusation', type: 'string' },
                      { name: 'outcome', title: 'Outcome', type: 'string' },
                      { name: 'details', title: 'Full Story/Details', type: 'text' },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      })
    ]
  })
]