/**
 * 
 */
package lam.com.wsd.webs.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author LamNguyen
 *
 */

@Controller
public class ContactController {

	@Autowired
	public Environment env;
	
	@RequestMapping("/contact")
    public String index(Model model) {
		model.addAttribute("page", "contact");
        return "contact";
    }
	
}
