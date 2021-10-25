const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://diverse.serve.email-x.parameter1.com');

config
  .setAdUnits('ccnews-now', [
    {
      name: 'ad-slot-1',
      id: '61718f6f0b81fa1a4a8068bb',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '61718f82c9a53c50cec6c153',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '61718f970b81fa1a098068e0',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '61718fa8c9a53cb0a2c6c166',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('diverse-daily', [
    {
      name: 'ad-slot-1',
      id: '6176b658c9a53cbe41c6c38b',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '6176b66cc9a53c48e8c6c39e',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '6176b67ec9a53ccb50c6c3a8',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '6176b68ec9a53c2339c6c3bb',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
