
const btn = [
    {a:"../src/files/Curiculo - Ronaldo Rafael Fidelis Da Silva.pdf", down:'Curriculo'}
];

function BtnDownload() {
  return (
    <div>
        {btn.map((curriculo) =>(
            <a href={curriculo.a} className="btn" download={curriculo.down} type='application/pdf'>
                Download Curriculo
          </a>
        ))};
    </div>
  );
};

export default BtnDownload