
const btn = [
    {a:"../src/files/Curiculo - Ronaldo Rafael Fidelis Da Silva.pdf", down:'Curriculo'}
];

function BtnDownload() {
  return (
    <section>
        {btn.map((curriculo) =>(
            <a href={curriculo.a} className="btn" download={curriculo.down}>
                Download Curriculo
          </a>
        ))};
    </section>
  );
};

export default BtnDownload