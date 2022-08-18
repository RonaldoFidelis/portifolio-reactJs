
const btn = [
    {a:"src/files/Curiculo - Ronaldo Rafael Fidelis Da Silva.zip"}
];

function BtnDownload() {
  return (
    <section>
        {btn.map((curriculo) =>(
            <a href={curriculo.a} className="btn" download={'Curriculo'}>
                Download Curriculo
          </a>
        ))};
    </section>
  );
};

export default BtnDownload