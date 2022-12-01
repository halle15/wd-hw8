package music.controllers;

import java.io.IOException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import music.data.ProductIO;
import music.models.CartEntry;
import music.models.Product;

@WebServlet("/cart")
public class CartServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public static List<CartEntry> getCartEntries(HttpServletRequest req) {
        HttpSession session = req.getSession();

        @SuppressWarnings("unchecked")
        List<CartEntry> entries = (List<CartEntry>)session.getAttribute("cart");

        if (entries == null) {
            entries = new ArrayList<CartEntry>();
            session.setAttribute("cart", entries);
        }

        return entries;
    }

    @Override
    protected void doGet(HttpServletRequest req,
            HttpServletResponse resp) throws ServletException, IOException {

        List<CartEntry> entries = getCartEntries(req);
        Gson gson = new Gson();
        String json = gson.toJson(entries);
        resp.setContentType("application/json");
        resp.getWriter().print(json);
    }

    @Override
    protected void doPost(HttpServletRequest req,
            HttpServletResponse resp) throws ServletException, IOException {

        String code = req.getParameter("productCode");
        Product product = ProductIO.getProduct(code);

        List<CartEntry> entries = getCartEntries(req);
        boolean alreadyInCart = false;
        for (CartEntry entry : entries) {
            if (entry.getProduct().getCode().equals(product.getCode())) {
                entry.setQty(entry.getQty() + 1);
                alreadyInCart = true;
                break;
            }
        }

        if (!alreadyInCart) {
            entries.add(new CartEntry(product, 1));
        }

        resp.sendRedirect("cart");
    }

}
