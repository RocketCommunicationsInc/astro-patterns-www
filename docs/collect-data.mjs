import fs from 'node:fs/promises'
import matter from 'gray-matter'
import removeMd from 'remove-markdown'

const articles = await fs.readdir('./docs/patterns/')

const data = await Promise.all(
  articles.filter(article => !article.includes('index')).map(async (article) => {
	return {
		name: article.replace('.md','')
	}
    // const file = matter.read(`./docs/patterns/${article}`, {
    //   excerpt: true,
    //   excerpt_separator: '<!-- more -->'
    // })

    // const { data, excerpt, path } = file
    // const contents = removeMd(excerpt).trim().split(/\r\n|\n|\r/)
	// console.log('contents', file);

    // return {
    //   ...data,
    //   title: contents[0].replace(/\s{2,}/g, '').trim(),
    //   path: path.replace(/\.md$/, '.html'),
    //   excerpt: contents.slice(1).join('').replace(/\s{2,}/g, '').trim()
    // }
  })
)

await fs.writeFile('./docs/data.json', JSON.stringify(data), 'utf-8')