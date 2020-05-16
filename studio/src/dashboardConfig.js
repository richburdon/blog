export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec064e15ae70aa7b3859cbb',
                  title: 'Sanity Studio',
                  name: 'blog-studio-in6z8jm1',
                  apiId: 'f0b0c7fd-1fe3-454f-8659-4ce7fb9d627e'
                },
                {
                  buildHookId: '5ec064e1e740ce7fdf1ec94d',
                  title: 'Blog Website',
                  name: 'blog-web-nvtdxbw3',
                  apiId: '3b937c53-1a3d-4395-a83e-d1d91812cf9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richburdon/blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-web-nvtdxbw3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
