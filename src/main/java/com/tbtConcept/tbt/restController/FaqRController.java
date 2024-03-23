package com.tbtConcept.tbt.restController;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.entity.Faq;
import com.tbtConcept.tbt.service.FaqService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/faq")
@RestController
@Log4j2
public class FaqRController {
	FaqService faqService;

	// List =====================================================
	@GetMapping("/fList")
	public List<Faq> getFList(Model model) {
		return faqService.selectList();
	}

}
