import './Noticia.css'

function NewsComponent(props) {

    var { title, content, fonte, imageUrl } = props

    if (imageUrl == null) {
        imageUrl = 'https://i1.wp.com/gelatologia.com/wp-content/uploads/2020/07/placeholder.png?ssl=1'
    }

    return (
        <div className="news">
            {imageUrl && <img src={imageUrl} alt="Imagem da Noticia" />}
            <div className='col2'>
                <h2>{title}</h2>
                <p>{content}</p>
                <p>fonte: {fonte}</p>
            </div>
        </div>
    )
}

export default NewsComponent;
