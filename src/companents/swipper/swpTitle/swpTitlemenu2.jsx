import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import Rusum from "../../cards/rusum";
import Narx from "../../cards/narx";
import Rang from "../../cards/rang";

function SwpTitlemenu2() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
                Ishlap chiqaruvchi
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div>
            <input  className="swp_title_input" type="text"  placeholder="Ishlap chiqaruvchini topish "/>
          </div>
          
            <Rusum/>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Narx
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         <input className="swp_title_input" type="text" placeholder="Qidirish"/>
         <Narx/>
        </AccordionPanel>
      </AccordionItem>



      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Rang
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         <input className="swp_title_input" type="text" placeholder="Qidirish"/>
         <Rang/>
        </AccordionPanel>
      </AccordionItem>




      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Operativ xotira
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         <input className="swp_title_input" type="text" placeholder="Qidirish"/>
        </AccordionPanel>
      </AccordionItem>



      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              O'rnatilgan xotira
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         <input className="swp_title_input" type="text" placeholder="Qidirish"/>
        </AccordionPanel>
      </AccordionItem>


      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Asosiy kamera MP
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         <input className="swp_title_input" type="text" placeholder="Qidirish"/>
        </AccordionPanel>
      </AccordionItem>





      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Akkumulyatir quvvati
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         <input className="swp_title_input" type="text" placeholder="Qidirish"/>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}


export default SwpTitlemenu2