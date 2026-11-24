const CardComponent = ({image_URL,description}) => {
  return (
<div className="bg-neutral-primary-soft block max-w-sm border border-default   md:h-[430px] md:w-[300px] rounded-base shadow-lg shadow-black p-4 md:p-2 rounded-xl border-1">
    <a href="#"  >
        <img className="rounded-t-base bg-center bg-no-repeat bg-cover h-[270px] md:h-1/2 rounded-xl bordor-1 " src={image_URL} alt="" />
    </a>
    <div className="p-1 text-center">
        
        <a href="#">
            <h5 className="mt-1 mb-6 text-2xl font-semibold   text-heading">{description}</h5>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quasi iure molestias qui, sequi doloribus.
            </p>
        </a>
         
    </div>
</div>

  )
}

export default CardComponent