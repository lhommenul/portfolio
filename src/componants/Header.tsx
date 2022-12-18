import '@/css/global.scss'

export default function Header() {

  const status = {
    iconClass : "share",
    description : "Open for any collaborative and offers"
  }

  const eyeCatcher = "Developpeur Web / Mobile"

  const smallSiteDescription = {
    title : "Folio",
    subTitle : "React / Symphony"
  }

  return (
    <header id="main-template-header" >
      <div id="ct-header-status" >
        <i className={status.iconClass} ></i>
        <p>{ status.description }</p>
      </div>

      <h2>
        { eyeCatcher }
      </h2>

      <div id="ct-header-folio" >
        <p>{ smallSiteDescription.title }</p>
        <p>{ smallSiteDescription.subTitle }</p>
      </div>
    </header>
  );
}