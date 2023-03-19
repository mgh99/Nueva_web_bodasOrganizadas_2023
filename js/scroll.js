function scrollToSection(sectionId) {
    console.log(sectionId);

    var section = document.getElementById(sectionId);
    console.log(section);
    var sectionOffse = section.offsetHeight;

    if (sectionOffse > 0) {
        console.log(sectionOffse);
        window.scroll({top: section.sectionOffse , left: 0, behavior: 'smooth'});
        //window.scrollTo({ top: 1700, behavior: "smooth" });
      

    }

}
