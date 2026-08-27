import logo from "@assets/logo.png"

export function Brand(){
  return(
    <div className="grid grid-cols-[auto_auto_1fr] items-center">
      <div>
        <img 
          className="h-10 w-auto"
          src={logo} 
          alt="Iñigo Quintana Delgadillo" 
        />
      </div>

      <div className="mx-2 h-10 w-0.5 rounded bg-accent"/>

      <div className="grid grid-rows-2 items-center">
        <p>Iñigo</p>
        <p>Quintana Delgadillo</p>
      </div>
    </div>
  );
};
